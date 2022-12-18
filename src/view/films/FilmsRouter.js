import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NowPlaying from '../../components/films/nowPlaying/NowPlaying'
import ComingSoon from '../../components/films/comingSoon/ComingSoon'
export default function () {
    return (
        <div>
            <Switch>
                <Route path="/films/nowPlaying" component={NowPlaying}></Route>
                <Route path="/films/comingSoon" component={ComingSoon}></Route>
            </Switch>
        </div>
    )
}
