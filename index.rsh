'reach 0.1';

export const main = Reach.App(()=> {
    const Alice = Participant ('Alice', {
        //do something here
        ready: Fun([], Null)
    })

    const Bob = API('Bob', { 
//multiple Bobs interact here
    })
    init()

    Alice.only(() => {
        interact.ready()
    })
    Alice.publish()
    commit()
    exit()
})