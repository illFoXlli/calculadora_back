module.exports = function (server) {

    server.route({
        method: 'GET',
        path: '/calculadora/about',
        handler: function (request, h) {

            const data = {
                message: 'Calculator API - made by Bernardo Rocha'
            };

            return data;
        }
    });

    server.route({
        method: 'GET',

        path: '/calculator/sum/{num1}+{num2}',
        handler: function (request, h) {

            const num1 = parseInt(request.params.num1);
            const num2 = parseInt(request.params.num2);

            const data = {
                answer: num1 + num2
            };

            return data;
        }
    });

    server.route({
        method: 'GET',

        path: '/calculator/sub/{num1}-{num2}',
        handler: function (request, h) {

            const num1 = parseInt(request.params.num1);
            const num2 = parseInt(request.params.num2);

            const data = {
                answer: num1 - num2
            };

            return data;
        }
    });

    server.route({
        method: 'GET',

        path: '/calculator/multi/{num1}*{num2}',
        handler: function (request, h) {

            const num1 = parseInt(request.params.num1);
            const num2 = parseInt(request.params.num2);

            const data = {
                answer: num1 * num2
            };

            return data;
        }
    });

    server.route({
        method: 'GET',

        path: '/calculator/div/{num1}/{num2}',
        handler: function (request, h) {

            const num1 = parseInt(request.params.num1);
            const num2 = parseInt(request.params.num2);

            const data = {
                answer: num1 / num2
            };

            return data;
        }
    });
}