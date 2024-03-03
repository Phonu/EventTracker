import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { EventList } from "../interfaces/EventList";


interface AllEvents {
    eventIds: EventList []
}
const initialState : AllEvents = {
    eventIds: []
} 
const selectedTrackerSlice = createSlice({
    name: 'Selected-Events',
    initialState,
    reducers: {
        addIds: (state, action: PayloadAction<EventList []>) => {
            if (!state.eventIds.some(e => e.id === action.payload.eventInfo.id)) {
                state.eventIds.push(action.payload.eventInfo);
            }
        },
        removeIds: (state, action) => {
            state.eventIds.splice(state.eventIds.findIndex(event => event.id === action.payload.event.id), 1)
        },
    }
});

export const addTrackerEvent = selectedTrackerSlice.actions.addIds;
export const removeTrackerEvent = selectedTrackerSlice.actions.removeIds;
export default selectedTrackerSlice.reducer;