import { instantInterestLogoImage, travelInterestLogoImage, weddingInterestLogoImage, wildlifeInterestLogoImage } from "../assets/main-images";

export const interestCoverData = [
    {
        id: 1, 
        interestType: "Wedding", 
        imageSrc: weddingInterestLogoImage,
        altText: "Wedding Interest Category"
    },
    {
        id: 2,
        interestType: "Wildlife",  
        imageSrc: wildlifeInterestLogoImage,
        altText: "Wildlife Interest Category"
    },
    {
        id: 3, 
        interestType: "Travel", 
        imageSrc: travelInterestLogoImage,
        altText: "Travel Interest Category"
    },
    {
        id: 4, 
        interestType: "Instant", 
        imageSrc: instantInterestLogoImage,
        altText: "Instant Interest Category"
    }
]