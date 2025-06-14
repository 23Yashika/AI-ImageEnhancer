import ImageUpload from "./ImageUpload";
import ImagePreview from "./ImagePreview";
import { useState } from "react";
import { enhancedimageAPI } from "../utils/enhanceimageApi";

const Home = () => {
    const [uploadImage, setUploadImage] = useState(null);
    const [enhancedImage, setEnhancedImage] = useState(null);
    const [loading, setLoading] = useState(false);

    const UploadImageHandler = async (file) => {
        setUploadImage(URL.createObjectURL(file));
        setLoading(true);
        try {
            const enhancedURL = await enhancedimageAPI(file); // assuming this returns { image: "url" }
            setEnhancedImage(enhancedURL.image); // set just the image URL
        } catch (error) {
            console.error("Enhancement error:", error);
            alert("Error while enhancing the image. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <ImageUpload UploadImageHandler={UploadImageHandler} />
            <ImagePreview
                loading={loading}
                uploaded={uploadImage}
                enhanced={enhancedImage} // use directly here (not .image)
            />
        </>
    );
};

export default Home;
