import React, {useContext} from 'react'
import { ChannelContext, UserContext} from '../App'
export default function Component3() {
  const name= useContext(UserContext)
  const channel= useContext(ChannelContext)
  return (
    <div>

      {/* Instead of writing this all to render the props in react there is a comp called useContext which makes things easy!! */}
      {/* <UserContext.Consumer>
        {
            name=>{
                return  (
                  <ChannelContext.Consumer>
                    {
                      channel=>{
                        return <div>Hello {name} learn coding in {channel}</div>
                      }
                    }
                  </ChannelContext.Consumer>
                ) 
            }
        }
      </UserContext.Consumer> */}
      {name} - {channel}
    </div>
  )
}
