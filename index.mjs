import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
import { ask } from '@reach-sh/stdlib';

const stdlib = loadStdlib();

console.log('creating a starting balance')
const startingBalance = stdlib.parseCurrency(100)

const accAlice = await stdlib.newTestAccount(startingBalance)

console.log('account created for Alice')

console.log('launching the contract...')

const ctcAlice = accAlice.contract(backend)

console.log('starting the backend...')

const users = []
let done=false
const startBobs = async() => {
const newBob = async(who) =>{
 const acct =  await stdlib.newTestAccount(startingBalance)
 const ctc = acct.contract(backend, ctcAlice.getInfo())
 users.push(acct.getAddress())
}

await newBob('Bob1')
await newBob('Bob2')
await newBob('Bob3')

while (!done){
await stdlib.wait(1)
} 

console.log(users)
}

await ctcAlice.p.Alice({
    //Alice interact object
    ready: () => {
        console.log('Alice is ready')
        startBobs()
    }
}
)

console.log('Alice and Bob are done')
done = true