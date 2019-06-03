<template>
    <div class="aside">
        <Tree :data="files" :render="fileRender" on-toggle-expand>

        </Tree>
    </div>
</template>

<script>
    export default {
        name: 'Aside',
        props: {},
        data() {
            return {
                files: [
                    {
                        title: 'parent 1',
                        expand: true,
                        children: [
                            {
                                title: 'parent 1-1',
                                stat: 'directory',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-1-1'
                                    },
                                    {
                                        title: 'leaf 1-1-2'
                                    }
                                ]
                            },
                            {
                                title: 'parent 1-2',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-2-1'
                                    },
                                    {
                                        title: 'leaf 1-2-1'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        methods: {
            fileRender(h, {root, node, data}) {
                return h('span',[
                    h('span')
                ]);
            }
        }
    };
</script>
<style scoped>
    .aside {
        height: inherit;
        padding: 16px;
    }
</style>
