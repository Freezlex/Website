import React from 'react';
import HomeHero from "@components/home/hero/home-hero";
import './temporary-home-body.component.scss';
import { ReactComponent as MatrixLogo } from '@svg/brand/matrix.svg';
import { ReactComponent as DiscordLogo } from '@svg/brand/discord.svg'
import { ReactComponent as GithubLogo } from '@svg/brand/github.svg'
import { ReactComponent as TwitterLogo } from '@svg/brand/twitter.svg'

export default function TemporaryHomeBody() {
    function redirectTo(url: string) {
        return window.open(url, '_blank')?.focus();
    }

    return(
        <div className="temporary-home-body">
            <HomeHero/>
            <div>
                <p>If you&apos;re seeing this message, it means that this site isn&apos;t finished yet...
                    So you might ask: when was it actually finished? You get the point...</p>
            </div>
            <div>
                <p>Anyway, how about joining me on one of the various networks I own?</p>
                <div className='social-medias-links'>
                    <a onClick={() => redirectTo('https://matrix.to/#/#freezlex:matrix.org')}><MatrixLogo/></a>
                    <a onClick={() => redirectTo('https://discord.gg/mFQMxqx')}><DiscordLogo/></a>
                    <a onClick={() => redirectTo('https://github.com/freezlex')}><GithubLogo/></a>
                    <a onClick={() => redirectTo('https://x.com/freezlex')}><TwitterLogo/></a>
                </div>
            </div>
        </div>
    )
}
