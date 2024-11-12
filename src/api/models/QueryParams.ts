export abstract class QueryParams {
    getUrlSearchParams(): URLSearchParams {
        const entries = Object.entries(this);
        const params = new URLSearchParams();

        entries.forEach((pair) => {
            params.append(pair[0], pair[1]);
        });

        return params;
    }
}