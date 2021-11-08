// import React from "react";
// import { render } from "@testing-library/react";
// import { InnerFormTextField } from "../FormTextField";

// // These tests are very much tied to MUI's TextField - maybe not so good
// describe("InnerFormTextField", () => {
//   it("should render", () => {
//     const register = jest.fn();
//     const id = "test";
//     const result = render(<InnerFormTextField fieldName="test" id={id} register={register} />);
//     const textField = result.container.querySelector("#" + id);
//     expect(textField).toBeTruthy();
//   });
//   it("should render with value from register", () => {
//     const register = jest.fn();
//     const value = "testValue";
//     const id = "test";
//     register.mockImplementationOnce(() => ({
//       value,
//     }));
//     const result = render(<InnerFormTextField fieldName="test" id={id} register={register} />);
//     const textField = result.container.querySelector("#" + id);
//     expect(textField).toBeTruthy();
//     expect(textField?.closest("input")?.value).toBe(value);
//   });
//   it("should render without error when fieldError is null", () => {
//     const register = jest.fn();
//     const id = "test";
//     const result = render(<InnerFormTextField fieldName="test" id={id} register={register} />);
//     const errorElement = result.container.querySelector("#test-helper-text");
//     expect(errorElement).toBeFalsy();
//     const textField = result.container.querySelector("#" + id);
//     expect(textField).toBeTruthy();
//     expect(textField?.getAttribute("aria-invalid")).toBe("false");
//   });
//   it("should render without error when fieldError is undefined", () => {
//     const register = jest.fn();
//     const id = "test";
//     const result = render(<InnerFormTextField fieldName="test" id={id} register={register} fieldError={undefined} />);
//     const errorElement = result.container.querySelector("#test-helper-text");
//     expect(errorElement).toBeFalsy();
//     const textField = result.container.querySelector("#" + id);
//     expect(textField).toBeTruthy();
//     expect(textField?.getAttribute("aria-invalid")).toBe("false");
//   });
//   it("should render with error", () => {
//     const register = jest.fn();
//     const error = "testError";
//     const id = "test";
//     const result = render(<InnerFormTextField fieldName="test" id={id} register={register} fieldError={{ message: error }} />);
//     const errorElement = result.container.querySelector("#test-helper-text");
//     expect(errorElement).toBeTruthy();
//     expect(errorElement?.innerHTML).toBe(error);
//     const textField = result.container.querySelector("#" + id);
//     expect(textField).toBeTruthy();
//     expect(textField?.getAttribute("aria-invalid")).toBe("true");
//   });
// });

export {};
