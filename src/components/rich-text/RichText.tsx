import { MediaBlockComp } from "./MediaBlock/Component";

import {
  LinkJSXConverter,
  RichText as ConvertRichText,
} from "@payloadcms/richtext-lexical/react";

import { BannerBlock } from "./Banner/Component";
import type {
  DefaultNodeTypes,
  DefaultTypedEditorState,
  SerializedBlockNode,
  SerializedLinkNode,
} from "@payloadcms/richtext-lexical";
import { CodeBlock } from "./Code/Component.tsx";

type NodeTypes = DefaultNodeTypes | SerializedBlockNode<any>;

const internalDocToHref = ({ linkNode }: { linkNode: SerializedLinkNode }) => {
  const { value, relationTo } = linkNode.fields.doc!;
  if (typeof value !== "object") {
    throw new Error("Expected value to be an object");
  }
  const slug = value.slug;
  return relationTo === "posts" ? `/posts/${slug}` : `/${slug}`;
};

const jsxConverters: any = ({ defaultConverters }) => ({
  ...defaultConverters,
  ...LinkJSXConverter({ internalDocToHref }),
  blocks: {
    banner: ({ node }) => {
      return <BannerBlock className="col-start-2 mb-4" {...node.fields} />;
    },
    mediaBlock: ({ node }) => (
      <MediaBlockComp
        className="col-start-1 col-span-3"
        imgClassName="m-0"
        {...node.fields}
        captionClassName="mx-auto max-w-[48rem]"
        enableGutter={false}
        disableInnerContainer={true}
      />
    ),
    code: ({ node }) => <CodeBlock className="col-start-2" {...node.fields} />,
  },
});

type Props = {
  data: DefaultTypedEditorState;
  enableGutter?: boolean;
  enableProse?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export default function RichText(props: Props) {
  const { className, enableProse = true, enableGutter = true, ...rest } = props;
  return (
    <ConvertRichText
      converters={jsxConverters}
      className={
        `payload-richtext ` +
        `${enableGutter ? "container" : "max-w-none"} ` +
        `${enableProse ? "mx-auto prose-md md:prose-md dark:prose-invert" : ""} ` +
        `${className || ""}`
      }
      {...rest}
    />
  );
}
