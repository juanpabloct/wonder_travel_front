import tw from "tailwind-styled-components";
interface Flex {
  col?: boolean;
  width?: string;
}
export const Flex = tw.div<Flex>`
flex 
${(b) => (b.col ? "flex-col" : "flex-row")}
${(b) => b.width}
 justify-center
`;
