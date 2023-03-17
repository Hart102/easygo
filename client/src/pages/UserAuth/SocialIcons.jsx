import AnchorTag from '../../component/AnchorTag'
const SocialIcons = () => {
  return (
    <>
    <p className="social-text fw-light text-center">Or Sign in with social platforms</p>
        <div className="social-media">
            <AnchorTag 
            location={'https://www.facebook.com/profile.php?id=100076575378123'} 
            classes={'social-icon'} 
            text={<i className="fab fa-facebook-f"></i>}
            />
            <AnchorTag 
            location={''} 
            classes={'social-icon'} 
            text={<i className="fab fa-twitter"></i>}
            />
            <AnchorTag 
            location={''} 
            classes={'social-icon'} 
            text={<i className="fab fa-google"></i>}
            />
            <AnchorTag 
            location={''} 
            classes={'social-icon'} 
            text={<i className="fab fa-linkedin-in"></i>}
            />
    </div>
    </>
  )
}

export default SocialIcons