const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Częstochowa University of Technology',
                degree: 'Sr, Computer Science',
                detail: "Bachelor's Degree in Computer System Engineering from Wincentego Pola.",
                year: '2012-2015'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'SoftServe',
                role: 'Senior Full Stack Developer',
                url: 'Odolanow',
                desc: 'As a senior developer, I have built smart and functional web and mobile applications at SoftServe company in Odolanow.',
                year: '03/2021 - Present',
                location: 'Odolanow, Poland'
            },
            {
                id: 2,
                title: 'Serwis komputerowy',
                role: 'Mobile Developer',
                url: 'Odolanow',
                desc: 'As a main developer, I have built smart and functional mobile app development at Serwis komputerowy company in Odolanow.',
                year: '02/2018 - 03/2021',
                location: 'Odolanow, Poland'
            },
            {
                id: 3,
                title: 'Alsen Partner',
                role: 'Web Designer',
                url: 'Odolanow',
                desc: 'As a main developer, I have built visually appealing user interface of web projects at Alsen Partner in Odolanow.',
                year: '03/2016 - 01/2018',
                location: 'Odolanow, Poland'
            },


        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
