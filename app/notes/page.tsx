import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { createClient } from "@/lib/supabase/server";

export default async function Page() {
  const supabase = await createClient();
  const { data: notes, error } = await supabase.from("notes").select();

  if (error || notes.length === 0) {
    return <span>Henüz Not Yok :/</span>;
  }

  return (
    <div>
      {notes.map((note) => (
        <Card className="w-fit px-4 py-2">
          <CardHeader>
            <h2>{note.title}</h2>
          </CardHeader>
          {note?.description && (
            <CardDescription>{note.description}</CardDescription>
          )}
        </Card>
      ))}
    </div>
  );
}
