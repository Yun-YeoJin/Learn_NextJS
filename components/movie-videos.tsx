import { API_URL } from "../app/constants";
import styles from "../styles/movie-videos.module.css";

async function getVideos(id: string) {
  const response = await fetch(`${API_URL}/${id}/videos`);
  throw new Error("Something broke...");
  return response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  await new Promise((resolve) => setTimeout(resolve, 10000));
  const videos = await getVideos(id);
  return (
    <div className={styles.container}>
      {videos.map((video) => (
        <iframe
          key={video.id}
          src={`https://youtube.com/embed/${video.key}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={video.name}
        />
      ))}
    </div>
  );
}
