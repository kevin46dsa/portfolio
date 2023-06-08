import { Octokit } from "@octokit/rest"  
export const octokit = new Octokit({     
     auth: process.env.REACT_APP_GITHUB_API_PRIVATE_KEY,    
     userAgent: 'portfolio v1' 
});
