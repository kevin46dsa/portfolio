import { Octokit } from "@octokit/rest"  
export const octokit = new Octokit({     
     auth: import.meta.env.VITE_GITHUB_API_PRIVATE_KEY,
     userAgent: 'portfolio v1' 
});
