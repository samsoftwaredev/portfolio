import { describe, expect, it } from "vitest";
import { buildStructuredData } from "./structured-data";
import { PROJECTS } from "@/data/site";

describe("buildStructuredData", () => {
  const data = buildStructuredData();
  const types = data["@graph"].map((n) => n["@type"]);

  it("emits a schema.org graph with Person, WebSite and ProfilePage", () => {
    expect(data["@context"]).toBe("https://schema.org");
    expect(types).toEqual(
      expect.arrayContaining(["Person", "WebSite", "ProfilePage", "ItemList"]),
    );
  });

  it("lists every project in order", () => {
    const list = data["@graph"].find((n) => n["@type"] === "ItemList") as {
      itemListElement: { position: number; item: { name: string } }[];
    };
    expect(list.itemListElement.map((i) => i.item.name)).toEqual(
      PROJECTS.map((p) => p.title),
    );
    expect(list.itemListElement[0].position).toBe(1);
  });

  it("is JSON serialisable", () => {
    expect(() => JSON.stringify(data)).not.toThrow();
  });
});
