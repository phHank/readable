const images = [
    {
        // keep at index 0 for 404 image
        src: 'https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/src/assets/img/post-bg.jpg?raw=true',
        alt: 'An astronaut working on a space station during a space walk'
    },
    {
        src: 'https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/src/assets/img/about-bg.jpg?raw=true',
        alt: 'A camera and other items atop a map'
    },
    {
        src: 'https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/src/assets/img/home-bg.jpg?raw=true', 
        alt: 'An open notebook on a white surface surrounded by a phone, plant, pencil, glasses and laptop' 
    },
    {
        src: 'https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/src/assets/img/contact-bg.jpg?raw=true',
        alt: 'Old-fashioned vintage black dial telephone on a white background'
    }
]

export const generateRandomImg = () => {
    const index = Math.floor(Math.random() * images.length)

    return images[index === 0 ? 1 : index]
}

export const get404Img = () => {
    return images[0]
}