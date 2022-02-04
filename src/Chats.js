import React from 'react'
import Chat from './Chat'
import './Chats.css'

function Chats() {
    return (
      <div className='chats'>
        <Chat
          name='Nina Kraviz'
          message='Party Tonight '
          timestamp='50 minutes ago'
          profilePic='https://i.guim.co.uk/img/media/2d1ad3221914f911f7f70e91821f37d949e759a8/124_196_1257_754/master/1257.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=6bd8eec3b1028c5acddd6091d8f94b65'
        />
        <Chat
          name='Alexa'
          message='I know you talking with siri !'
          timestamp='2 days ago'
          profilePic='https://i2-prod.mirror.co.uk/incoming/article10033097.ece/ALTERNATES/s615/PROD-Polly-and-Alexa.jpg'
        />
        <Chat
          name='Amile Lens'
          message='Hard? Techno !'
          timestamp='3 days ago'
          profilePic='https://i.ytimg.com/vi/WJnntm9rh3g/maxresdefault.jpg'
        />
        <Chat
          name='Peggy Gou'
          message='Beer or Jackfire?'
          timestamp=' week ago'
          profilePic='https://i1.sndcdn.com/avatars-mk7uV3TnfkhvKIDb-3ELMTQ-t500x500.jpg'
        />
        <Chat
          name='Charlotte de witte'
          message='Due with Apashe Soon!!'
          timestamp=' year ago'
          profilePic='https://nl.metrotime.be/sites/default/files/dpistyles/ena_16_9_extra_big/node_167964/329473/public/old_wp_content/wp_import_content/20210509/charlottetrouwenthumb.jpg?itok=-zwmt05Z1620550082'
        />
        <Chat
          name='Salvatore Ganacci'
          message='SAY YAAA YAAA'
          timestamp=' year ago'
          profilePic='https://www.music-covers-creations.com/wp-content/uploads/2018/07/Salvatore-Ganacci-DR-Screenshot-EDM.jpg'
        />
       
      </div>
    )
}

export default Chats
