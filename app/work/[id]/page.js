import { getWorkData } from "@/lib/works";
import WorkPage from "@/screens/work";

export default async function Work(props) {
  const { id } = await props.params;
  const work = await getWorkData(id);

  return <WorkPage work={work} />;
}
