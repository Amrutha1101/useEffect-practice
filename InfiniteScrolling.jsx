import { useEffect, useState } from "react";
import axios from "axios";
export default function InfiniteScrolling() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const fetchPage = async (page) => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`
    );
    console.log(res);
    return res.data;
  };

  const loadMorePhotos = () => {
    setLoading(true);
    fetchPage(page).then((newPhotos) => {
      setPhotos((prevPhotos) => [...prevPhotos, ...newPhotos]);
      setLoading(false);
      setPage((prevPage) => prevPage + 1);
    });
  };

  useEffect(() => {
    loadMorePhotos();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        Math.ceil(window.innerHeight + document.documentElement.scrollTop) >=
          document.documentElement.scrollHeight &&
        !loading
      ) {
        loadMorePhotos();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => removeEventListener("scroll", handleScroll);
  }, [loading]);
  return (
    <div>
      <h1>Infinite Scroll with Photos</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "10px",
        }}
      >
        {photos.map((photo) => (
          <div key={photo.id}>
            <img src={photo.thumbnailUrl} alt={photo.title} />
            {/* <p>{photo.title}</p> */}
          </div>
        ))}
      </div>
      {loading && <p>Loading...</p>}
    </div>
  );
}
