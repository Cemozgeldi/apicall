import ImageItem from "./ImageItem";

export default function ImageList({ imagesPlaceholder }) {
  return (
    <div className="imageList">
      {imagesPlaceholder.map((image, index) => {
        return <ImageItem key={index} image={image} />;
      })}
    </div>
  );
}
