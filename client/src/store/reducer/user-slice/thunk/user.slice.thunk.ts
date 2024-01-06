import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserService } from "../../../../services/user.service";

export const userLogout = createAsyncThunk("user/userLogout", async (): Promise<void> => {
	await UserService.logout();
});