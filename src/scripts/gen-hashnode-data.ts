import axios from 'axios';
import fs from 'fs'
import readingTime from 'reading-time'

const HASHNODE_DATA_FILE_PATH = "./data/hashnode.json";
const HASHNODE_API_URL = "https://gql.hashnode.com/";
const HASHNODE_USERNAME = "bjorndonald";

const main = async () => {
    const query = `
      query ($username: String!, $page: Int!) {
  user(username: $username) {
    posts(pageSize: 6, page: $page) {
      nodes {
        id
        slug
        author {
          name
        }
        id
        slug
        title
        brief
        coverImage {
          url
        }
        publishedAt
        content {
          markdown
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        previousPage
        nextPage
      }
      totalDocuments
    }
  }
}
    `;

    const posts = []
    let domain: string = ""
    let didNotGetData = true;

    for (let page = 1; didNotGetData; page++) {
        const res = await axios.post(
            HASHNODE_API_URL,
            JSON.stringify({
                query,
                variables: {
                    username: HASHNODE_USERNAME,
                    page
                }
            }),
            {
                headers: {
                    "Authorization": "439dc967-ae6e-4c89-9a51-58da5f4b4e3d",
                    "Content-Type": "application/json"
                }
            }
        );
        console.log(JSON.stringify(res.data))

        const {
            data: { data },
        } = res
        posts.push(...data.user.nodes);
        if (!data.user.posts.hasNextPage) {
            didNotGetData = false
            // domain = data.user.posts.nodes[page].publication.domainInfo.domain.host
            break;
        }
    }

    const parsedPosts = posts.map(post => {
        const { markdown, ...postWithoutContent } = post;
        const rTime = readingTime(markdown);
        const wordCount = markdown.split(/\s+/gu).length;
        return {
            ...postWithoutContent,
            readingTime: rTime,
            wordCount,
        }
    })

    fs.writeFileSync(
        HASHNODE_DATA_FILE_PATH,
        JSON.stringify({ posts: parsedPosts })
    )
}

main()