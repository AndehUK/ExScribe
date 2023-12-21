"use client";

import { PlusCircle } from "lucide-react";
import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { useMutation } from "convex/react";
import { api } from "@/../convex/_generated/api";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";
import { formatUsername } from "@/lib/format";

const DocumentsPage = () => {
  const { user, isLoaded } = useUser();
  const create = useMutation(api.documents.create);

  const onCreate = () => {
    const promise = create({
      title: "Untitled",
    });

    toast.promise(promise, {
      loading: "Creating a new note...",
      success: "New untitled note created!",
      error: "Failed to create a new note.",
    });
  };

  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src="/empty.png"
        height={300}
        width={300}
        alt="empty"
        className="dark:hidden"
      />
      <Image
        src="/empty-dark.png"
        height={300}
        width={300}
        alt="empty"
        className="hidden dark:block"
      />
      {!isLoaded && <Spinner size="lg" />}
      {isLoaded && user && (
        <>
          <h2 className="text-lg font-medium">
            Welcome to{" "}
            <code className="bg-neutral-300 dark:bg-neutral-600 px-1">
              {formatUsername(user?.username || "User")}
            </code>{" "}
            ExScribble
          </h2>
          <Button onClick={onCreate}>
            <PlusCircle className="h-4 w-4 mr-2" />
            Create a note
          </Button>
        </>
      )}
    </div>
  );
};

export default DocumentsPage;
