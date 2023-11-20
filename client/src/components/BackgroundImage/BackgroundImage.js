const BackgroundImage = ({ 
  imageUrl,   
  alt = "Descriptive alt text",
  className,
  children
}) => (
  <div className={className} style={{backgroundImage: `url(${imageUrl})`}}>
    <img src={imageUrl} alt={alt} className="hidden"/>
    {children} 
  </div>
);

export default BackgroundImage;
