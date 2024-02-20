import { useCallback, useState } from "react";
import { Handle, Position, NodeResizer, NodeToolbar } from "reactflow";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const handleStyle = { left: 10 };

function TextUpdaterNode({ data, isConnectable, selected, setSelected }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  const [customFontSize, setFontSize] = useState(12);
  const [blockColor, setBlockColor] = useState("red");
  const [borderColor, setBorderColor] = useState("red");

  return (
    <div
      className={`text-updater-node p-3 bg-${blockColor} rounded-lg w-full h-full`}
      style={{ backgroundColor: blockColor, border: `1px solid ${borderColor}` }}
    >
      <NodeToolbar isVisible={selected} className="flex">
        <Select
          onValueChange={(e) => {
            setFontSize(e);
          }}
        >
          <SelectTrigger className="w-[80px]">
            <SelectValue placeholder="Select font size" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="12">12</SelectItem>
              <SelectItem value="16">16</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="24">24</SelectItem>
              <SelectItem value="28">28</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select
          onValueChange={(e) => {
            setBlockColor(e);
          }}
        >
          <SelectTrigger className="w-[80px]">
            <SelectValue placeholder="Select bg color" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="red">Red</SelectItem>
              <SelectItem value="yellow">Yellow</SelectItem>
              <SelectItem value="orange">Orange</SelectItem>
              <SelectItem value="blue">Blue</SelectItem>
              <SelectItem value="transparent">Transparent</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select
          onValueChange={(e) => {
            setBorderColor(e);
          }}
        >
          <SelectTrigger className="w-[80px]">
            <SelectValue placeholder="Select bg color" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="red">Red</SelectItem>
              <SelectItem value="yellow">Yellow</SelectItem>
              <SelectItem value="orange">Orange</SelectItem>
              <SelectItem value="blue">Blue</SelectItem>
              <SelectItem value="transparent">Transparent</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        {/* <input type="text" onChange={(e) => setBlockColor(e.target.value)} /> */}
      </NodeToolbar>
      <NodeResizer isVisible={selected} />
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
      />
      <div>
        <textarea
          id="text"
          name="text"
          onChange={onChange}
          className={`nodrag bg-transparent outline-none w-full h-full resize-none text-[${customFontSize}px]`}
          style={{ fontSize: customFontSize }}
        />
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        id="b"
        isConnectable={isConnectable}
      />
    </div>
  );
}

export default TextUpdaterNode;
