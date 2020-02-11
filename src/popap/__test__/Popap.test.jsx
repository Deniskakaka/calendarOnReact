import React from "react";
import { shallow } from "enzyme";
import Popap from "../Popap.jsx";

describe("<Popap/>", () => {
  it("should display call func", () => {
    const mockFunc = jest.fn();
    const wrappedComponent = shallow(
      <Popap closePopap={mockFunc} />
    );
    wrappedComponent.find(".black").simulate("click");
    expect(mockFunc).toBeCalled();
  });

  it("should display call func", () => {
    const mockFunc = jest.fn();
    const wrappedComponent = shallow(
      <Popap creacteTask={mockFunc} />
    );
    wrappedComponent
      .find(".event__btn-save")
      .simulate("click");
    expect(mockFunc).toBeCalled();
  });

  it("should display call func", () => {
    const mockFunc = jest.fn();
    const wrappedComponent = shallow(
      <Popap creacteTask={mockFunc} tasks={[]} />
    );
    wrappedComponent.setState({
      description: "no expensive",
      title: "buy meat",
      dateStart: "01-10-2020",
      dateEnd: "01-10-2020",
      start: "12:00",
      end: "13:00"
    });
    wrappedComponent
      .find(".event__btn-save")
      .simulate("click");
    expect(mockFunc).toBeCalledWith(
      {
        description: "no expensive",
        end: "13:00",
        start: "12:00",
        timeEnd: "01-10-2020",
        timeStart: "01-10-2020",
        title: "buy meat"
      },
      []
    );
  });

  it("should display don't show button delete", () => {
    const wrappedComponent = shallow(
      <Popap delete={false} />
    );
    expect(wrappedComponent.find('.event__btn-delete').exists()).toEqual(false);
  });

  it("should display  show button delete", () => {
    const wrappedComponent = shallow(
      <Popap delete={true} />
    );
    expect(wrappedComponent.find('.event__btn-delete').exists()).toEqual(true);
  });
});
