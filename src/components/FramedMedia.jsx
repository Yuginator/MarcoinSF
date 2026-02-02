import frameSrc from '../assets/frameBorders/frame.svg?url';

const FramedMedia = ({
    src,
    type = 'image',
    alt = 'Framed media',
    className = '',
    borderWidth = '24px', // extensible prop
    isVisible = true, // Virtualization control
    children
}) => {

    // Heavy Border Style (GPU Intensive)
    const activeStyle = {
        borderStyle: 'solid',
        borderWidth: borderWidth,
        borderImageSource: `url("${frameSrc}")`,
        borderImageSlice: '116', // Adjusted for padding (107 + 9)
        borderImageRepeat: 'stretch',
        borderColor: 'transparent',
        background: 'white',
        boxSizing: 'border-box',
    };

    // Cheap Fallback Style (Layout placeholder)
    const placeholderStyle = {
        borderStyle: 'solid',
        borderWidth: borderWidth,
        borderColor: '#e5e5e5', // Light gray placeholder
        background: 'white',
        boxSizing: 'border-box',
    };

    const style = isVisible ? activeStyle : placeholderStyle;

    return (
        <div className={`inline-block relative ${className}`} style={{ ...style, width: 'auto', height: '100%' }}>
            {/* Container to handle content fitting inside the frame borders */}
            <div className="h-full overflow-hidden block" style={{ width: 'auto' }}>
                {children ? (
                    children
                ) : (
                    type === 'video' ? (
                        <video
                            src={src}
                            className="h-full w-auto object-cover block"
                            autoPlay
                            loop
                            muted
                            playsInline
                        />
                    ) : (
                        <img
                            src={src}
                            alt={alt}
                            className="h-full w-auto object-cover block"
                            loading="lazy"
                        />
                    )
                )}
            </div>
        </div>
    );
};

export default FramedMedia;
