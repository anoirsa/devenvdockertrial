import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import assert from "assert";
import Login  from './Login';
import { ProviderTest } from "./testWrap";

test('Render to find a sum', () => {
    render(<Login />);
    const userInput = screen.getByPlaceholderText(/username/i);
    expect(userInput).toBeInTheDocument();

  });

test("button should be disables", () => {
  render(<Login />);

})

test("Error meesage should be invisible", () => {
  render(<Login />);
  const errorEl = screen.getByTestId("error");
  expect(errorEl).not.toBeVisible();
})

test("Username test", () => {
  render(<Login />);
  const testValue = 'test';
  const userInput = screen.getByPlaceholderText(/username/i);
  fireEvent.change(userInput, {target: {value: testValue}});
  expect((userInput as any).value).toBe(testValue)
})

test("Password test" , () => {
  render(<Login />)
  const testValue = "PasswordTest";
  const userInput : HTMLInputElement = screen.getByPlaceholderText(/password/i);
  fireEvent.change(userInput, {target: {value: testValue}});
  expect(userInput.value).toBe(testValue);
})

test("Login should be successful", async () => {
  render(<Login />)
  const btn = screen.getByTestId("loginbtn");
  const usrSpan = screen.getByTestId("nameU");
  fireEvent.click(btn)
  await waitFor(() => expect(usrSpan.textContent).toBe("Leanne Graham"));
})

test("Should get 3" ,() => {
  render(ProviderTest(<Login />));
  const btn = screen.getByTestId("nameJ");
  expect(btn.textContent).toBe("3");
})

