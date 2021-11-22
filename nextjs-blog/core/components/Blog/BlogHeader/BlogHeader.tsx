import * as React from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import styles from "./header.module.scss";

interface Props {
    post: any;
}

export const BlogHeader = ({ post }: Props) => {
    const date = new Date(post.updatedAt ?? post.createdAt);

    const published = formatDistanceToNow(date);
    const updatedAtFull =
        post.updatedAt && formatDistanceToNow(new Date(post.updatedAt));

    return (
        <header className={styles.blogHeader}>
            <div className={styles.leftContainer}>
                <div>
                    <h1 className={styles.blogTitle}>{post.title}</h1>
                    <h2 className={styles.blogDate}>
                        <span title={updatedAtFull}>
                            Published {published} ago{" "}
                        </span>
                        {post.updatedAt ? <span> - Updated</span> : null}
                        {post.readingTime ? (
                            <>
                                - <span>{post.readingTime}</span>
                            </>
                        ) : null}
                    </h2>
                </div>
            </div>
        </header>
    );
};
