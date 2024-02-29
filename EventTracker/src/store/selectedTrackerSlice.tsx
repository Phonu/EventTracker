import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { EventList } from "../interfaces/EventList";


interface EventList1 {
    ids: EventList []
}
const initialState : EventList1 = {
    ids: []
} 
const selectedTrackerSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addIds: (state, action: PayloadAction<EventList []>) => {
            if (state.ids.findIndex(e => e.id === action.payload.eventdata.id)) {
                state.ids.push(action.payload.eventdata);
            }
        },
        removeIds: (state, action) => {
            console.log('action.payload, action.payload', action.payload);
            console.log('action.payload.event.id', action.payload.event.id, state.ids.indexOf(action.payload.event.id) );
            console.log('state.ids.', state.ids);


            // state.ids.splice(state.ids.indexOf((action.payload.event.id), 1));
            state.ids.splice( state.ids.indexOf(action.payload.event.id), 1)
        },
    }
});

export const addTrackerEvent = selectedTrackerSlice.actions.addIds;
export const removeTrackerEvent = selectedTrackerSlice.actions.removeIds;
export default selectedTrackerSlice.reducer;