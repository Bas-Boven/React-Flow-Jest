import {act, render} from "@testing-library/react";
import React from "react";
import ReactFlowPage from "./ReactFlowPage";

test('test react flow page', async () => {
    await act(async () => {
        render(<ReactFlowPage/>)
    })
})
