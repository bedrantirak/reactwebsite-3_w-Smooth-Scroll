import React from 'react'
import {FaFacebook,FaTwitter,FaLinkedin,FaYoutube,FaInstagram} from "react-icons/fa";
import {FooterContainer,
FooterWrap,
FooterLinksContainer,
FooterLinkItems,
FooterLinksWrapper,
FooterLinkTitle,
FooterLink,
SocialMedia,
SocialMediaWrap,
SocialLogo,
WebsiteRights,
SocialIcons,
SocialIconLink
} from "./FooterElements";


const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
             <FooterLinksContainer>

                 <FooterLinksWrapper>
                     <FooterLinkItems>
                            <FooterLinkTitle>About Us </FooterLinkTitle>
                            <FooterLink to="/signin">How it works</FooterLink>
                            <FooterLink to="/signin">Testimonials</FooterLink> 
                            <FooterLink to="/signin">Careers</FooterLink> 
                            <FooterLink to="/signin">Investors</FooterLink> 
                            <FooterLink to="/signin">Terms of Service</FooterLink>                         
                     </FooterLinkItems>

                     <FooterLinkItems>
                            <FooterLinkTitle>Content Us </FooterLinkTitle>
                            <FooterLink to="/signin">How it works</FooterLink>
                            <FooterLink to="/signin">Testimonials</FooterLink> 
                            <FooterLink to="/signin">Careers</FooterLink> 
                            <FooterLink to="/signin">Investors</FooterLink> 
                                                     
                     </FooterLinkItems>                 
                 </FooterLinksWrapper>

                 <FooterLinksWrapper>
                     <FooterLinkItems>
                            <FooterLinkTitle>Videos </FooterLinkTitle>
                            <FooterLink to="/signin">How it works</FooterLink>
                            <FooterLink to="/signin">Testimonials</FooterLink> 
                            <FooterLink to="/signin">Careers</FooterLink> 
                            <FooterLink to="/signin">Investors</FooterLink> 
                            <FooterLink to="/signin">Terms of Service</FooterLink>                         
                     </FooterLinkItems>

                     <FooterLinkItems>
                            <FooterLinkTitle>Social Media </FooterLinkTitle>
                            <FooterLink to="/signin">How it works</FooterLink>
                            <FooterLink to="/signin">Testimonials</FooterLink> 
                            <FooterLink to="/signin">Careers</FooterLink> 
                            <FooterLink to="/signin">Investors</FooterLink> 
                                                  
                     </FooterLinkItems>                 
                 </FooterLinksWrapper>
                 <SocialMedia>
                     <SocialMediaWrap>
                         <SocialLogo to="/">bdrn</SocialLogo>
                         <WebsiteRights>bdrn © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                     <SocialIcons>

                         <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                             <FaFacebook />
                         </SocialIconLink>
                         <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                             <FaInstagram />
                         </SocialIconLink>
                         <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                             <FaYoutube />
                         </SocialIconLink>
                         <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                             <FaTwitter />
                         </SocialIconLink>
                         <SocialIconLink href="//www.linkedin.com/in/bedran-t%C4%B1rak-1a4bb9146/" target="_blank" aria-label="LinkedIn">
                             <FaLinkedin />
                         </SocialIconLink>
                          
                     </SocialIcons>
                     </SocialMediaWrap>
                 </SocialMedia>

             </FooterLinksContainer> 

            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
