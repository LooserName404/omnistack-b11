const generateUniqueId = require("./generateUniqueId")
// @ponicode
describe("generateUniqueId", () => {
    test("0", () => {
        let callFunction = () => {
            generateUniqueId()
        }
    
        expect(callFunction).not.toThrow()
    })
})
