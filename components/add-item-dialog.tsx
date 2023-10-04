"use client";
import { Button } from "@/components/ui/button";
import { MouseEvent, useState,useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function AddNewItemDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState("");
  const [detailsError, setDetailsError] = useState("");
  const [todoItems, setTodoItems] = useState<{ title: string; details: string }[]>([]);


  useEffect(() => {
    const storedTodoItems = localStorage.getItem("todoItems");
    if (storedTodoItems) {
      setTodoItems(JSON.parse(storedTodoItems));
    }
  }, []);

  const handleSubmit = (event:MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    event.preventDefault();
    setDetailsError("");
    setTitleError("");
    if (title && details) {
      setTodoItems((prev) => {
      const newData =  [...prev, { title, details }]
      localStorage.setItem("todoItems", JSON.stringify(newData));
      return newData;
      });
        setTitle("");
        setDetails("");
        setIsOpen(false);
      } else {
        if (!title) {
          setTitleError("Please enter a title");
        } else {
          setTitleError("");
        }
        if (!details) {
          setDetailsError("Please enter details");
        } else {
          setDetailsError("");
        }
      }
  };
  

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Add New Item</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add a todo item</DialogTitle>
          <DialogDescription>
            Add a title and details for things to do
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid grid-cols-1 items-center gap-4">
            <Label htmlFor="title" className="text-left">
              Title
            </Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                if (e.target.value !== "") {
                  setTitleError("");
                }
              }}
              className="col-span-3"
            />
            {titleError && <span className="text-red-500">{titleError}</span>}
          </div>
          <div className="grid grid-cols-1 items-center gap-4">
            <Label htmlFor="todoDetails" className="text-left">
              Things to do
            </Label>
            <Textarea
              id="todoDetails"
              value={details}
              onChange={(e) => {
                setDetails(e.target.value);
                if (e.target.value !== "") {
                  setDetailsError("");
                }
              }}
              className="col-span-3"
            />
            {detailsError && <span className="text-red-500">{detailsError}</span>}
          </div>
        </div>
        <DialogFooter>
          <Button onClick={(event) => handleSubmit(event)} type="submit">
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
