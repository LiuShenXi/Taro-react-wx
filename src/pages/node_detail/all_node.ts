interface ThreadProps {
    title: string;
    member: string;
    last_modified: string;
    replies: number;
    node: string;
    not_navi?: boolean;
    tid?: number;
  }
  
  const allNodes: ThreadProps[] = [
    {
      title: "How to learn TypeScript",
      member: "user1",
      last_modified: "2024-06-19",
      replies: 12,
      node: "typescript",
      not_navi: false,
      tid: 101,
    },
    {
      title: "React best practices",
      member: "user2",
      last_modified: "2024-06-18",
      replies: 8,
      node: "react",
      not_navi: true,
      tid: 102,
    },
    {
      title: "State management in Redux",
      member: "user3",
      last_modified: "2024-06-17",
      replies: 15,
      node: "redux",
      tid: 103,
    },
    {
      title: "Next.js vs. Gatsby",
      member: "user4",
      last_modified: "2024-06-16",
      replies: 5,
      node: "nextjs",
      tid: 104,
    },
    {
      title: "JavaScript performance tips",
      member: "user5",
      last_modified: "2024-06-15",
      replies: 20,
      node: "javascript",
      not_navi: true,
      tid: 105,
    },
    {
      title: "Understanding closures in JS",
      member: "user6",
      last_modified: "2024-06-14",
      replies: 18,
      node: "javascript",
      tid: 106,
    },
    {
      title: "Styling with CSS-in-JS",
      member: "user7",
      last_modified: "2024-06-13",
      replies: 7,
      node: "css",
      not_navi: false,
      tid: 107,
    },
    {
      title: "GraphQL vs. REST",
      member: "user8",
      last_modified: "2024-06-12",
      replies: 14,
      node: "graphql",
      tid: 108,
    },
    {
      title: "Testing React components",
      member: "user9",
      last_modified: "2024-06-11",
      replies: 22,
      node: "testing",
      not_navi: true,
      tid: 109,
    },
    {
      title: "Building a PWA",
      member: "user10",
      last_modified: "2024-06-10",
      replies: 30,
      node: "pwa",
      tid: 110,
    },
  ];
  
  export default allNodes;
  