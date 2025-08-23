import { CustomCategory } from "@/app/(app)/(home)/types";
import { Category } from "@/payload-types";
import { baseProcedure, createTRPCRouter } from "@/trpc/init";

export const categoriesRouter = createTRPCRouter({
    getMany: baseProcedure.query(async ({ ctx }) => {

        const data = await ctx.db.find({
            collection: 'categories',
            depth: 1, // Populate subcategories
            pagination: false,
            where: {
                parent: {
                    exists: false,
                }
            },
            sort: "name"
        });

        const formattedData: CustomCategory[] = data.docs.map((doc) => ({
            ...doc,
            subcategories: (doc.subcategories?.docs ?? []).map((doc) => ({
                ...(doc as Category),
                subcategories: undefined
            }))
        }));

        return formattedData;
    }),
});