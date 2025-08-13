import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";


export default function Home() {
  return (
    <div className="flex flex-col">
      <Button variant={"elevated"}>
        hello
      </Button>
      <Progress value={50} />
      <Textarea placeholder="Im a text area" />
      <Input />
    </div>
  )
}
