import styles from "../styles/About.module.scss";
import { useGlobalDispatchContext } from "../context/globalContext";

function SingleWorkItem({
  company,
  position,
  time,
  description,
  link,
  handleWorkHover,
  handleWorkNotHover,
}) {
  const dispatch = useGlobalDispatchContext();

  return (
    <article
      className={styles.workHistoryItem}
      onMouseEnter={() =>
        handleWorkHover(
          company.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split(".")[0]
        )
      }
      onMouseLeave={handleWorkNotHover}
    >
      <h3>
        {company} ({time})
      </h3>
      <p>{position}</p>
      <a
        href={link}
        onMouseEnter={() =>
          dispatch({ type: "CURSOR_STYLES", cursorStyles: "link" })
        }
        onMouseLeave={() =>
          dispatch({ type: "CURSOR_STYLES", cursorStyles: "default" })
        }
      >
        {link.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "")}
        <span>→</span>
      </a>
    </article>
  );
}

export default SingleWorkItem;
