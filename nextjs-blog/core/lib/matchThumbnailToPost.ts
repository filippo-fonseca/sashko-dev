import { Post } from "./blog";
import { PostDirectory } from "./PostDirectory";

export const matchThumbnailToPost = title => {
    for (let i = 0; i < PostDirectory.length; i++) {
        const post = PostDirectory[i];
        if (post.title === title) {
            return post.imgURL;
        }
    }
};
