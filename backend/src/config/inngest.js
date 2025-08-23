import {Inngest} from "inngest"

export const inngest = new Inngest({ id : "PingR"})

syncUser = inngest.createFunction(
    {id : "sync-user"},
    {event : 'clerk/user.created'},
    async ([event]) => {
        
    }
)

export const functions = []