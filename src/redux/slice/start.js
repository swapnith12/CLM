import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const StartProcess = createAsyncThunk("StartProcess", async () => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({})
    };
    const response = await fetch("/engine-rest/process-definition/key/Start/start", requestOptions);
    const result= await response.json();
    return result;
  });

  export const GetForm = createAsyncThunk("FormKey",async ()=>{
    const response = await fetch("/engine-rest/process-definition/key/Start/startForm")
    const result= await  response.json();
    console.log(result)
    return result
  })

const start = createSlice({
    name: "start",
    initialState: {
        isloading: false,
        data: null,
        isError: false,
        FromKey:null,
    },
    extraReducers: (builder) => {
        builder.addCase(StartProcess.pending, (state, action) => {
            state.isloading = true;
        });
        builder.addCase(StartProcess.fulfilled, (state, action) => {
            state.isloading = false;
            state.data = action.payload;
        })
        builder.addCase(StartProcess.rejected, (state, action) => {
            console.log("error",action.payload)
            state.isError=true;
        })
        builder.addCase(GetForm.pending, (state, action) => {
            state.isloading = true;
        });
        builder.addCase(GetForm.fulfilled, (state, action) => {
            state.isloading = false;
            state.FromKey = action.payload;
        })
        builder.addCase(GetForm.rejected, (state, action) => {
            console.log("error",action.payload)
            state.isError=true;
        })
    }
})

export default start.reducer;



