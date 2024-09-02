import React, { useMemo } from 'react'
import soundcloud from "../../Assets/soundcloud.png"
import youtube from "../../Assets/youtube.svg"
import instagram from "../../Assets/instagram.svg"
import mixcloud from "../../Assets/mixcloud.svg"
import twitch from "../../Assets/twitch.svg"
import spotify from "../../Assets/spotify.png"
import linkedin from "../../Assets/linkedin.png"
import github from "../../Assets/github.png"
import defaultlink from "../../Assets/defaultlink.png"


/**
 * SocialLink component is a reusable component that takes in a variant prop and returns a social link with the corresponding icon.
 * 
 * @param string variant  "Soundcloud" | "Youtube" | "Instagram" | "Mixcloud" | "Twitch" | "Spotify" | "LinkedIn" | "Github"
 * @returns 
 */
const SocialLink = ({variant}) => {

let data = {
    soundcloud:{link:"https://soundcloud.com/noisynos", img:soundcloud, text:"SoundCloud", alt:"SoundCloud"},
    youtube:{link:"www.youtube.com/@noisynos1555", img:youtube, text:"YouTube", alt:"YouTube"},
    instagram:{link:"instagram.com/noisy.nos", img:instagram, text:"Instagram", alt:"Instagram"},
    mixcloud:{link:"mixcloud.com/Nos0108", img:mixcloud, text:"MixCloud", alt:"MixCloud"},
    twitch:{link:"twitch.tv/noisynos01", img:twitch, text:"Twitch", alt:"Twitch"},
    spotify:{link:"https://open.spotify.com/user/ib9bugf6icc5xd4kzc4rku8ot?si=da47842f1b87442b", img:spotify, text:"Spotify", alt:"Spotify"},
    linkedin:{link:"https://www.linkedin.com/in/kevindsa2017", img:linkedin, text:"LinkedIn", alt:"LinkedIn"},
    github:{link:"https://github.com/kevin46dsa", img:github, text:"GitHub", alt:"GitHub"},
    buymecoffee:{link:"https://www.buymeacoffee.com/kevin46dsa", img:"https://cdn.buymeacoffee.com/buttons/default-orange.png", text:"", alt:"Buy Me A Coffee"},
    default:{link:"", img:defaultlink, text:"Default", alt:"Default"}
}

let selectedVariantData = useMemo(() => {
    switch (variant) {
        case "Soundcloud":
            return data.soundcloud
        case "Youtube":
            return data.youtube
        case "Instagram":
            return data.instagram
        case "Mixcloud":
            return data.mixcloud
        case "Twitch":
            return data.twitch
        case "Spotify":
            return data.spotify
        case "LinkedIn":
            return data.linkedin
        case "Github":
            return data.github
        case "buymecoffee":
            return data.buymecoffee
        case "default":
            return data.default
       default:
            return data.default

    }
}, [variant])



  return (
    
    <a href={selectedVariantData.link} className="btn btn-lg btn-outline-secondary" target="_blank" rel="noopener noreferrer" >
      <img src={selectedVariantData.img} style={{maxHeight:"35px"}} alt={selectedVariantData.alt}/>{selectedVariantData.text}
    </a> 
  )
}

export default SocialLink