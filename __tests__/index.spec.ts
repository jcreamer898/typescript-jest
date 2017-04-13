import { EmailService, ICommunicator, IEmail, Email } from "../";

describe("MyClass", () => {
  it("should work", () => {
    const Mock = jest.fn<ICommunicator<IEmail>>(() => ({
      send: jest.fn(),
    }));
    const mock = new Mock();
    const instance = new EmailService(mock);
    instance.send(new Email("to@foo.com", "from@foo.com", "oh hai", "Some foo email..."));

    expect(instance).toBeTruthy();
    expect(mock.send).toHaveBeenCalled();
  });
})