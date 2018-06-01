describe("App", () => {
  const button = document.querySelector("#click-me")
  const counter = document.querySelector('#counter');
  describe("Counter", () => {
    it("is set to 120 when the button is clicked", () => {
      button.click();
      expect(counter.textContent).toEqual('120')
    })
  })

  describe("Button", () => {
    it("has an ID of 'click-me'", () => {
      expect(button.id).toBe('click-me')
    })
  })

  describe("Factorial", () => {
    it("returns the factorial of positive numbers", () => {
      expect(factorial(5)).toEqual(120);
    })

    it("returns 1 if the provided number is less than 1 ", () => {
      expect(factorial(-20)).toBe(1);
    })
  })

  describe("Computer", () => {
    pc = new Computer;
    it("is created with a hard drive size of 512", () => {
      expect(pc.hardDriveSpace).toBe(512);
    })

    describe("installProgram", () => {
      computer = new Computer;


      beforeEach(function (done) {
        computer.installProgram(300, function () {
          done();
        })
      })
      it("can install a program if there is sufficient space", () => {
        expect(computer.hardDriveSpace).toEqual(212)
      });

      beforeEach(function (done) {
        computer.installProgram(600, function () {
          done();
        })
      })

      it("will not install the program if there is insufficient space", () => {

        expect(computer.hardDriveSpace).toBe(512);
      })

    })

    describe("format", () => {
      pc = new Computer;
      pc.format();
      it("resets the hard drive to 512, even after programs have been installed", () => {

        expect(pc.hardDriveSpace).toBe(512)
      });
    })

  })

})