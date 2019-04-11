import { createActionStates } from "actions/utils/createActionStates";
import { REQUEST, SUCCESS, ERROR } from "lib/constants/reduxSuffixes";

const CREATE_USER = "CREATE_USER";

describe("actions/util/createActionStates", () => {
    it("creates four action types", () => {
        const createUser = createActionStates(CREATE_USER);
        expect(createUser.ACTION).toEqual(CREATE_USER);
        expect(createUser.REQUEST).toEqual(`${CREATE_USER}_${REQUEST}`);
        expect(createUser.SUCCESS).toEqual(`${CREATE_USER}_${SUCCESS}`);
        expect(createUser.ERROR).toEqual(`${CREATE_USER}_${ERROR}`);
    });
});
