import React, {useState} from 'react';
import {Select, SelectOption, Input, Checkbox, CheckboxGroup} from '@momentum-ui/react';
import '@momentum-ui/core/css/momentum-ui.min.css';
import {CodeBlock, tomorrow, a11yDark, googlecode} from "react-code-blocks";
import './App.scss';

import {WebexMeetingsWidget} from '@webex/widgets';

import '@webex/widgets/dist/css/webex-widgets.css';

export default function App() {
    const [token, setToken] = useState('');
    const [destination, setDestination] = useState('');
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');
    const [muteAudioIM, setMuteAudioIM] = useState(false);
    const [muteVideoIM, setMuteVideoIM] = useState(false);
    const [settingsIM, setSettingsIM] = useState(false);
    const [shareScreenIM, setShareScreenIM] = useState(false);
    const [leaveMeetingIM, setLeaveMeetingIM] = useState(false);
    const [memberRoasterIM, setMemberRoasterIM] = useState(false);
    const [muteAudioIC, setMuteAudioIC] = useState(false);
    const [muteVideoIC, setMuteVideoIC] = useState(false);
    const [settingsIC, setSettingsIC] = useState(false);
    const [joinMeetingIC, setJoinMeetingIC] = useState(false);

    const code =
    `<html>
        <head>
            <title>Webex Widget Demo</title>
            <link href="https://cdn.jsdelivr.net/gh/WXSD-Sales/MeetingWidget/docs/webex-widgets.css" />
            <script src="https://cdn.jsdelivr.net/gh/WXSD-Sales/MeetingWidget/docs/bundle.js"></script>
        </head>

        <body>
            <div id="meeting-widget"></div>
            <script>
                webexMeetingWidget({accessToken: "${token}",
                meetingDestination: "${destination}",
                theme:"light",
                width:"${width}",
                height:"${height}",
                layout:"Grid",
                inMeetingControls:['mute-audio','leave-meeting'],
                interstitialControls:['join-meeting']});
            </script>
        </body>
    </html>`;

    const myControls = (inMeeting) => inMeeting ? ['leave-meeting'] : ['join-meeting'];

    function handleChange(event) {
        console.log(muteAudioIM)
    }

    function toggle(value) {
        console.log(!value)
        return !value;
    }

  return (
      <div>
          <header className='App-header'>
          {/* <h1 className='header'>Meetings Widget Demo</h1> */}
          <div className='outerDiv'>
                <div className='flex-child'>
                    <div>
                    
                    <Input
                        name='Access Token'
                        label='Access Token'
                        htmlId='defaultInput'
                        inputSize='small-10'
                        placeholder='access token'
                        value={token}
                        onChange={(event) => setToken(event.target.value)}
                    />
                    <Input
                        name='Meeting Destination'
                        label='Meeting Destination'
                        htmlId='defaultInput'
                        inputSize='small-10'
                        placeholder='meeting destination ID'
                        value={destination}
                        onChange={(event) => setDestination(event.target.value)}
                    />
                    
                    </div>
                    <div className='form-inline'>
                        <div>
                            
                        InMeeting Controls
                            <div className='form-inline'>
                                <div>
                                    <CheckboxGroup name='CheckboxGroup1'>
                                        <Checkbox
                                            value='mute-audio-im'
                                            label='mute-audio'
                                            htmlId='testCheckbox1'
                                            onClick={() => setMuteAudioIM(toggle)}
                                        />
                                        <Checkbox
                                            value='mute-video-im'
                                            label='mute-video'
                                            htmlId='testCheckbox2'
                                            onClick={() => setMuteVideoIM(toggle)}
                                        />   
                                    </CheckboxGroup>
                                </div>
                                
                                <div>
                                <CheckboxGroup name='CheckboxGroup2'>
                                        <Checkbox
                                            value='settings-im'
                                            label='settings'
                                            htmlId='testCheckbox3'
                                            onClick={() => setSettingsIM(toggle)}
                                        />
                                        <Checkbox
                                            value='share-screen-im'
                                            label='share-screen'
                                            htmlId='testCheckbox4'
                                            onClick={() => setShareScreenIM(toggle)}
                                        />  
                                    </CheckboxGroup>
                                </div>

                                <div>
                                    <CheckboxGroup name='CheckboxGroup3'>  
                                        <Checkbox
                                            value='leave-meeting-im'
                                            label='leave-meeting'
                                            htmlId='testCheckbox5'
                                            onClick={() => setLeaveMeetingIM(toggle)}
                                        />
                                        <Checkbox
                                            value='member-roaster-im'
                                            label='member-roaster'
                                            htmlId='testCheckbox6'
                                            onClick={() => setMemberRoasterIM(toggle)}
                                        />     
                                    </CheckboxGroup>
                                </div>
                            </div>
                        </div>  
                    </div>
                    <div className="form-inline">
                        <div>
                        Interstitial Controls
                            <div className="form-inline">
                                <div>
                                <CheckboxGroup name='CheckboxGroup4'>
                                    <Checkbox
                                        value='mute-audio-ic'
                                        label='mute-audio'
                                        htmlId='testCheckbox7'
                                        onClick={() => setMuteAudioIC(toggle)}
                                    />
                                    <Checkbox
                                        value='mute-video-ic'
                                        label='mute-video'
                                        htmlId='testCheckbox8'
                                        onClick={() => setMuteVideoIC(toggle)}
                                    />
                                </CheckboxGroup>

                                </div>
                                <div>
                                    <CheckboxGroup name='CheckboxGroup5'>
                                        <Checkbox
                                            value='settings-ic'
                                            label='settings'
                                            htmlId='testCheckbox9'
                                            onClick={() => setSettingsIC(toggle)}
                                        />
                                        <Checkbox
                                            value='join-meeting-ic'
                                            label='join-meeting'
                                            htmlId='testCheckbox10'
                                            onClick={() => setJoinMeetingIC(toggle)}
                                        />   
                                    </CheckboxGroup>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        Theme
                        <div className='form-inline'>   
                            <Select defaultValue='Select Item Here' >
                                <SelectOption value='light' label='light' onChange={(event) => console.log(event.target.value)}/>
                                <SelectOption value='dark' label='dark' />
                            </Select>
                        </div>
                    </div> 
                    <div>
                        Layout
                        <div className='form-inline-nowrap'>
                            <Input
                                name='width'
                                label='Width'
                                htmlId='defaultInput3'
                                inputSize='small-5'
                                placeholder='width'
                                onChange={(event) => setWidth(event.target.value)}
                            />
                            <Input
                                name='height'
                                label='Height'
                                htmlId='defaultInpu4'
                                inputSize='small-5'
                                placeholder='height'
                                onChange={(event) => setHeight(event.target.value)}
                            />
                        </div>
                    </div>    
                    <div className="code">
                    <CodeBlock
                        text={code}
                        language={"html"}
                        showLineNumbers={false}
                        theme={tomorrow}
                        wraplines
                    />
                    </div>
                </div>
                
                <div className='flex-child'>
                <WebexMeetingsWidget
                    style={{width: `${width}`, height: `${height}`,minWidth:"600px",minHeight:"500px"}} // Substitute with any arbitrary size or use `className`
                    accessToken={token}
                    meetingDestination={destination}
                    className={`webex-meeting-widget-demo wxc-theme-${theme}`}
                    layout={layout}
                />
                </div>
            </div>
            </header>
        </div>
    );
}

